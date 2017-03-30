import React from 'react'
import { Link } from 'react-router'

const Home = () => (
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">爱工作</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to="/">首页</Link></li>
                        <li><Link to="/login">登录</Link></li>
                        <li><Link to="/about">注册</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="jumbotron">
            <h1>爱工作欢迎您！</h1>
            <p>
                <Link to="/" class="btn btn-lg btn-primary">探索&raquo;</Link>
            </p>
        </div>

    </div>
)

export default Home
