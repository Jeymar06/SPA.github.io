import home from './home.controller'
import Posts from './posts.controller'
import notFound from './404.controller'


const pages = {

home: home,
posts: Posts,
notFound: notFound

    
}

export {pages};