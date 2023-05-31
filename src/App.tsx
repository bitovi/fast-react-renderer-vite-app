import { RouterProvider } from "react-router"
import type { ReactElement } from "react"

import router from "./routes"
import Layout from "@shared/components/Layout"

function App(): ReactElement {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  )
}

export default App
