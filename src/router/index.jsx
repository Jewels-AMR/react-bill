// 创建路由实例，绑定 path element
import { createBrowserRouter } from 'react-router'
import Layout from '@/pages/Layout/index'
import News from '@/pages/New/index'
import Month from '@/pages/Month/index'
import Year from '@/pages/Year/index'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index : true, // 默认路由
          element: <Month />
        },
        {
          path: 'year',
          element: <Year />
        }

      ]
    },
    {
      path: '/new',
      element: <News />
    }
 ]
)

export default router
