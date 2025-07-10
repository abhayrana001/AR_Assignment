
const HadoopBlog = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-orange-100 my-10 rounded-2xl">
            <h2 className="text-3xl font-semibold text-center mb-6">Hadoop</h2>
            <p className="text-gray-800 leading-7 text-justify">
                Hadoop is a framework which comprised of set of tools and technologies. They combine together to make a Eco System. Different tools can be used at different parts of projects based on its implementations and features. Hadoop ecosystem includes both official Apache open source projects and a couple of commercial tools and solutions. Some of the open source examples include Hive, Pig, Oozie and Sqoop etc. In this article we will cover open source tools which are part of Eco system. Lets start with HDFS.


<br/><br/>
                Hadoop Distributed File System (HDFS)
                HDFS is a storage component of Hadoop and a technology to store the data in distributed manner in order to process faster. HDFS splits the incoming file into small chunks and are stored on blocks of size 128 MB. HDFS runs on top of local file system, it is a logically created over physical storage present on the various machines in the Hadoop cluster.

                HDFS is designed to tolerate high component failure rate by replicating the files over multiple machines. Further, it is designed only to handle large files as the larger the file the less it has to seeks the data into various machines. It deals with Streaming or sequential data rather than random access, sequential data means few seeks( Hadoop only seeks to the beginning block and read sequentially).

                Any data which needs to be processed by Hadoop should be present in HDFS. Hence we need to ingest data into HDFS from local/remote machines before processing it.
<br/><br/>
                Map Reduce
                Map reduce engine is the job execution framework of hadoop. It is based on the papers published by Google. It consist of a MAP functions which processes and organizes the incoming data into a key-value pair. The Mapped data is provided to a Reduce function which further processes and aggregates the incoming data according to the task requirement and provides the final processed output.

                This works the same way as – Suppose you have a book containing 10 chapters and you have to write the summary of the book. So, for this task you appointed 10 people(called Mappers) to read each chapter. When the Mappers are done reading each chapter a new person is appointed(called Reducer) to hear the content of every chapter and write the final summary of the book. This way the task is accomplished in a efficient manner. Hadoop provides flexibility in writing the Map Reduce code in numerous languages like Java, Python, Scala, Ruby,etc.
<br/><br/>
                Hive
                Hive is a tool in the Hadoop environment which was contributed by Facebook. It is a data warehouse infrastructure built on top of Hadoop. It was built in 2007, the basic idea behind hive was to implement the prevalent database concepts to the unstructured world of hadoop. Hive provides a boon to the developers having a hard time the Object Oriented Programming languages by implementing simple sql-like queries(known as HQL – Hive Query Language) to run the Map reduce job. Hive stores data in the form of database and tables, the data is queried and ultimately a Map reduce job is run in the background to fetch the data.
            </p>
        </div>
    )
}

export default HadoopBlog