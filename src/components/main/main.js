import React from 'react';
import {Container,Button,Row,Col} from 'reactstrap';
import './main.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews , incLikes, incDislikes, incViews } from '../../actions/newsActions';

class Main extends React.Component{
    componentWillMount(){
        this.props.fetchNews();
    }
    render(){
        var news = this.props.news.map((news,key)=>{
            return(
                    <Row className="card-container" key={key}>
                        <Col xs="12" sm="12" md="4" lg="4">
                            <Link to={"/news/"+news.id} onClick={()=>{this.props.incViews(news.id)}}>
                            <img src={news.image} alt="myexampleimage"/>
                            </Link>
                        </Col>
                        <Col xs="12" sm="12" md="8" lg="8">
                            <Row>
                                <Col className="text-center news-title">
                                    {news.title}
                                    <Link to={"/news/"+news.id} onClick={()=>{
                                        this.props.incViews(news.id)}
                                        }><i className="fa fa-link link"></i></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="news-desc">{news.description.substring(1,256)}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                    <Button color="link" onClick={()=>{
                                        this.props.incLikes(news.id)
                                        }}><i className="fa fa-thumbs-up likes"></i>{" "}{news.likes}</Button>
                                    <Button color="link" onClick={()=>{this.props.incDislikes(news.id)}}><i className="fa fa-thumbs-down dislikes"></i>{" "}{news.dislikes}</Button>
                                    <Button color="link"><i className="fa fa-eye views"></i>{" "}{news.views}</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            );
        });
        return(
            <Container className="main-container">
                {news}
            </Container>
        );
    }
}

const mapStateToProps = state =>({
    news:state.news.items
})

export default connect(mapStateToProps,{fetchNews,incLikes,incDislikes,incViews})(Main);
