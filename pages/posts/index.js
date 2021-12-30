import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";
import {Fragment} from "react";
import Head from "next/head";


function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Mask` Blog - All posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts!"/>
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts: posts
        }
    }
}

export default AllPostsPage