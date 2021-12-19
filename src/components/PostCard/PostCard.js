import { Accordion } from 'react-bootstrap'

function PostCard({
    post
}) {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Post</Accordion.Header>
                <Accordion.Body>
                   {post.name}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default PostCard