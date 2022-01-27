import useAuth from "../hooks/useAuth";
import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
// import CreatePostForm from "../components/CreatePostForm";

export default function CreatePost() {
    const { user } = useAuth();
    return (<Layout>
      <AuthContent>
        <h1>Orders</h1>
        <div>Here are your orders!</div>
      </AuthContent>
    </Layout>);
}
