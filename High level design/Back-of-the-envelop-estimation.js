// Question 1:
// Estimate how much data Instagram stores per day from image uploads.

// You should write:

// Your assumptions (number of users, % active, uploads/day, image size)

// Calculations (images/day × image size)

// Final answer (in GB/TB/PB)



// SOLUTION
// assumptions:

// number of users = 2 billion (2,000,000,000)

// % active users = 50% (1,000,000,000)

// uploads per active user per day = 1

// average image size = 2 MB
// // Calculations:

// active users = 2,000,000,000 × 0.5 = 1,000,000,000

// images per day = 1,000,000,000 × 1 = 1,000,000,000

// total data per day = 1,000,000,000 × 2 MB = 2,000,000,000 MB
// // Final answer:

// total data per day in GB = 2,000,000,000 MB ÷ 1,024 = 1,953,125 GB










// 🚗 Question 2: Estimate the number of rides Uber handles per day globally.
// Hints (like an interviewer would give you if you ask):

// You can make your own assumptions (number of users, % active, rides per active user per day, etc.).

// You can assume Uber operates in major cities worldwide.

// Try to arrive at a final estimate of total rides/day and possibly peak rides per second (to prepare for system design scale discussion).

// 🎯 Goal:

// State your assumptions clearly.

// Calculate step by step.

// Convert results properly (e.g., per day → per second).

// (Optional) Think about what that means for system load — e.g., requests per second, DB writes, etc.


// SOLUTION

// number of users: 50 million (50,000,000)

// % daily active users: 20% (10,000,000)

// rides per active user per day: 1.5

// // Calculations:

// daily active users = 50,000,000 × 0.2 = 10,000,000

// total rides per day = 10,000,000 × 1.5 = 15,000,000

// // Convert to per second:

// rides per second = 15,000,000 ÷ 86400 ≈ 173







// Question 3

// 📍This Question (GPS / Location Data Estimation)

// What it asks:

// “How much location data (in bytes) is produced every day from all the active drivers?”

// Focus:

// Estimating data ingestion rate and storage for real-time GPS tracking.

// This helps design the data pipeline, Kafka topics, database writes, and storage cost.

// So instead of counting rides, we’re now counting GPS signals sent by each driver.

// 🧠 Analogy
// Question Type	Example	Focus
// Ride volume estimation	How many bookings per second?	API load, request throughput
// GPS data estimation	How many bytes per second from driver location updates?	Streaming, storage, bandwidth
// 🧭 Summary

// You’re now estimating data throughput, not just event count.
// So — for example — if each driver sends GPS coordinates every 5 seconds, you’ll calculate:

// How many total GPS messages are sent per day

// How big each message is (in bytes)

// How many GB/TB/PB of data that becomes per day

// What it means for system design (Kafka topics, storage, replication)


// SOLUTION

// assumption : 
// number of driver : 10 million (10,000,000)

// % active drivers : 70% (7,000,000)

// number of active drivers = 10,000,000 * 0.7 = 7,000,000

// assuming 1 driver requires 5 minutes to reach the pickup location

// assuming the gps coordinates every 5 seconds.

// on an average 1 driver will send 5*60/5 = 60 messages

// so total messages per day = 7,000,000 * 60 = 420,000,000

// assuming each GPS message is 20 kb

// total data per day = 420,000,000 * 20 kb = 8,400,000,000 kb

// converting to GB ~ 8,400,000,000 kb / 1000 / 1000 = 8400 GB

// converting to TB ~ 8400 / 1000 = 8.4 TB









// Question 4

// 🚩 Question — Trip-history + real-time location pipeline

// Problem statement (combine estimation + system implications):

// Your ride-hailing service handles ~15 million rides/day (use that if you want — from your earlier estimate). For each ride we want to store:

// the trip record (one record per ride) with metadata (rider id, driver id, start time, end time, start/end coords, fare, status),

// the GPS trace for the ride (sequence of location samples while the ride is active),

// and we want a real-time pipeline that ingests GPS messages and publishes them to downstream consumers (map updates, ETA service, analytics).

// Tasks (you should produce numbers + short design decisions):

// Estimate storage & throughput

// Choose and state assumptions (e.g., rides/day, avg GPS samples per ride, size per trip record, size per GPS message, retention period).

// Compute:

// trip records/day and bytes/day (and per month)

// GPS messages/day and bytes/day (and per month)

// rough number of writes/sec and reads/sec at peak (pick a peak factor)

// Design the ingestion pipeline (high level)

// Which components would you use (e.g., mobile app → API gateway → ingress service → Kafka/topics → consumers → long-term storage like S3 + OLTP DB) — draw it with short bullet points.

// For Kafka: estimate required partitions given messages/sec and desired throughput per partition (assume a partition throughput like 5k msgs/sec or choose a number and justify).

// How many consumer instances might you need (assume a consumer can process X msgs/sec).

// Storage strategy

// Where do trip records go (RDBMS / NoSQL)? Where does raw GPS stream go (S3 / HDFS?), and where the processed/aggregated data?

// Retention policy suggestions (hot vs cold storage).

// Operational considerations (short bullets)

// Backpressure/retry, ordering guarantees, eventual consistency, schema evolution, cost tradeoffs.

// One optimization idea you’d apply to reduce cost or latency (e.g., downsample GPS, compress traces, TTL for raw traces, single-writer per ride).

// SOLUTION

// assumption :
//  number of rides per day: 15 million (15,000,000)

//  number of records per ride : 1 

//     size of each trip record : 2 kb

//     total number of trip records per day = 15,000,000 * 1 = 15,000,000

//     total size of trip records per day = 15,000,000 * 2 kb = 30,000,000 kb

//  assuming 1 driver requires 5 minutes to reach the pickup location

//  assuming the gps coordinates every 5 seconds.

//  on an average 1 driver will send 5*60/5 = 60 messages

//  so total gps messages per day = 15,000,000 * 60 = 900,000,000

//  assuming each GPS message is 20 kb

// total data per day = 900,000,000 * 20 kb = 18,000,000,000 kb

// converting to GB ~ 18,000,000,000 kb / 1000 / 1000 = 18000 GB