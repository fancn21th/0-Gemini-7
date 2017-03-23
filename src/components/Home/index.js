import React from 'react'
import { NavLink } from 'react-router-dom'

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
                        <li class="active"><NavLink to="/">首页</NavLink></li>
                        <li><NavLink to="/">登录</NavLink></li>
                        <li><NavLink to="/">注册</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="jumbotron">
            <h1>爱工作欢迎您！</h1>
            <p>
                <NavLink to="/" class="btn btn-lg btn-primary">探索&raquo;</NavLink>
            </p>
        </div>

    </div>
)

export default Home
