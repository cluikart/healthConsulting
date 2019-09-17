import * as React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Helmet} from "react-helmet";

class Blog extends React.Component {

    render() {
        return(
            <div>
                <Helmet>
                    <style>{'body {background-color: #ebf3fc}'}</style>
                </Helmet>
                <Container fluid={false}>
                    <Row className="blog-header-row">
                        <Col md={12} className="blog-header-col">
                            <h2>Blog</h2>
                        </Col>
                        <Col md={1} xs={6}> Search </Col>
                        <Col md={1} xs={6}>Filter</Col>
                    </Row>
                    <Row className="blog-list-row">
                        <Col  xs={12} md={10} className="blog-list-col card-style-bevel">
                            <div className="blog-list-title-wrapper">
                                <h3 className="blog-list-title">A Blog entry Title</h3>
                                <div className="blog-list-author-wrapper">
                                <p className="blog-list-author">by Author Name</p>
                                </div>
                            </div>
                            <p>     This is a brief description of the blog entry.
                                This will be used for searching tools and for readers
                                to get an idea of the article before proceeding.
                            </p>
                            
                            <p className="blog-list-date">Date Posted: mm/dd/yyyy</p>
                        </Col>

                    </Row>
                    <Row className="blog-list-row">
                        <Col  xs={12} md={10} className="blog-list-col card-style-bevel">
                            <div className="blog-list-title-wrapper">
                                <h3 className="blog-list-title">A Blog entry Title</h3>
                                <div className="blog-list-author-wrapper">
                                <p className="blog-list-author">by Author Name</p>
                                </div>
                            </div>
                            <p>This is a brief description of the blog entry.
                                This will be used for searching tools and for readers
                                to get an idea of the article before proceeding.
                            </p>
                            
                            <p className="blog-list-date">Date Posted: mm/dd/yyyy</p>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Blog;