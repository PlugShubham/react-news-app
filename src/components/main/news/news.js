import React from 'react';
import './news.css';
import {Container,Row,Col,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews , incLikes, incDislikes } from '../../../actions/newsActions';

class News extends React.Component{
    componentWillMount(){
        this.props.fetchNews();
    }
    render(){
       // console.log(this.state.news)
       var id = parseInt(this.props.match.params.id);
        return(
            <Container className="news-container">
                <Row>
                    <Col>
                        <i className="fa fa-arrow-left"></i>
                        <Link to="/">{" "}back</Link>
                    </Col>
                </Row>
                <Row className="card-container">
                    <Col xs="12" sm="12" md="4" lg="4">
                        <Row>
                            <Col>
                                {"   "}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={this.props.news[id-1].image} alt="myexampleimage"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="8" lg="8">
                        <Row>
                            <Col className="text-center news-title">
                                {this.props.news[id-1].title}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="news-desc">{this.props.news[id-1].description}</Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                                <Button color="link" onClick={()=>{this.props.incLikes(id)}}><i className="fa fa-thumbs-up likes"></i>{" "}{this.props.news[id-1].likes}</Button>
                                <Button color="link" onClick={()=>{this.props.incDislikes(id)}}><i className="fa fa-thumbs-down dislikes"></i>{" "}{this.props.news[id-1].dislikes}</Button>
                                <Button color="link"><i className="fa fa-eye views"></i>{" "}{this.props.news[id-1].views}</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}


const mapStateToProps = state =>({
    news:state.news.items
})

export default connect(mapStateToProps,{fetchNews,incLikes,incDislikes})(News);

