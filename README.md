Kafka is a Messaging service that can act as both a Message Queue and Pub-Sub pattern .
Kafka requires zookeeper (another service from Apache) for load balancing.
Kafka can have topics and the topics can be further stored in partition.
One consumer can consume to multiple topics and the partition is self balanced by kafka but one partition can't be consumed by multiple consumers this way Kafka act as message queue.
In order to act as Pub-Sub, Kafka has a concept of Group, Consumers in same groups that subscribed to a topic gets the topic from partition, self balanced by Kafka but all the groups also get all the Partition, this way it act as Pub-Sub as well.
Kafka has admin which has task for creating topics and partition etc, producers that produces data, consumer that consumes data. 
