import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "yurimuahxx",
      caption: "WOW it works",
      imageUrl:
        "https://lh3.googleusercontent.com/goBcpvbZh_u88VgGGk_0qylSbjMIie92fLw0CLamPV9dXAmmul6cYDKdZt3onPzyX--ouAzJm3gSa3PVPR-fsZeGizDpDlox0LCPI_wj8N90CNBHTszIQ82SmARWAZh05VJK58HLV92nuvJ6jrcXDEskPoA9jPIbZGQZxTbr5xgViDAF9nAZ2Ba5iEHMWboiaYl9FZybrH2BMvtog6neutgdOxCBrCFAsN-Tclq-IjrHsiPYLTJh1Si_6BRWOqaD-7cDOQbkT4AnMPnppCGfKVQQvod3jBS_bRW6iKHrF_obfx3i-4DyftXny6ze2ftbqQA5U9PPsW7yeqrkaso2U3n8J742DXxobaJzB3Ft1yvbA_qIXzoyEqew6teR3nOXm4ynfJMaBJOjNIIEKnEOwdso0T_PM2ma4dQZ8S4iliNIPv9w5ts8wmaVsKo3WYO_zr-H5-lMyzDwary5u-dPN12aZBMnXVOVokR9dpzoxaD7IaOEIYpBghNvoDT0O8BvR6-go7FR47Wf0Cg_1F8MZ6L9yFQtSs50P1EVlUBF_VNTEMG6d-pXrQbnzAXo5sGLHgnGlG_Jek9BrBSlhz79rhEdqYGZHbAwd0kP_sJ3oDZk_HZ9vm_FAQM7-YU8dzwb0SM8RjO7_YNAreZsMU-u614Bjn6x_fEkbKTdnPe8kJxSTUplxIV3ld4RCISK1j3dyaqKRGKs4Ub6fNQ-6ZYWv20jJAEJ1pn_8DP22YbHg0JPRIdBfmGaJymnixK8-F-wr01MDZ2j_HE2u_l039OlHkDh0BRSg-YQl-ZDHsXPjwelSAUM7UuD8CwgaaMYemGo-ttAD_oTjwmGonYs4rIaEqrPrMhrLrR1-E6mEra7ZZ41JZ127L8QKLPGXKbzYOsrpO6cv34tXVSqPMuFXkMLLVzAmIPAxePTS4EFAP08DtaVAWgyeBF5WyK_C-014AQSPSKQjc2DogMIBvo=s599-no?authuser=0",
    },

    {
      username: "2chae.a",
      caption: "채아는 너무 귀여워",
      imageUrl:
        "https://lh3.googleusercontent.com/VsEVYp_94-1dl3eO8SO3tlWfBDc4ufovCkft2ohJq-rmxC2DY7biIk9OUFfnw5yW48OwfhkhFNGOlLPoiuZYKz_8fhh19fwJJQ72AYmywwD36kdfEzzsC_QCShWQFBvbgZ2Hjcf0Agrlhm0vtVq6vKFxR3xQmNRoGtN8nDUdF3AWmG60B0QAkYYkkaYGI9tZHR20fX7HRdeKtrwaCzl8N08zl4f63b8uvhjnwwB6t5uNnUWXdZVWlYz9_-KdH2YYDiSjPEXwcIu7YU8m5WcM94XX_s-WrdN5zaN44oP40qwcjOexggUUmT-iCm8U1mgiuSktZ1zROMNiRc9Lz6QG8iW9p4kdmv-tOOSTDNpu-EMuHatkosRDxt0tXQpmW2GPDg8MOiLn5nvVgNJ3f3yE7IAiq896dh11aodATx5heRQC5nPVLR-kSdWGMbw1kJPvtn_PYcPIVc5XOgoXmW5Tb1WMFXWqaoCG97i_yrQmiXf8LXqvL_hJ2Eu3HZIofabo9AZ85ict_ET4jydDWDW4_xySUpKmamhK55Ljb-e3tkvBagzY5s-vJPJRFd3mF5g99kyZkNw6Vr8WudojCgQ4T9eMIYBRhdwIj5XorUvz1NXlZpaKgY3kC8pjIcn4PKt55nXwnCxvV8tncMMyc85yCYUudDVbJiC70SIhqalgbnX91OF6TXn8Sh29yaV1R42AO5VjSm_tc0ZiBr-kiaK1_X28Tg4Loy_OiIb9bgopSHLlQL_XYQJ9WzDpv_wShvOOJHqePOoEOVMTNU8FnDzy-CBq9MeilkjSNPAmWkaJXiLGZN0ZBF5zShXquxMuO7r4XnhS-zuTSKNjL0fxl7BxpWJwQYCtwM6g-AyTZBeTQW957ZBoDc36nPxQVmrFiunFokV3K8m5s9IZxf-Om507Mk3CSy3zsYncmmlz8fO-sWDIWPLe-jWTZTSIS1TLaJB28VuG-W3jy2J0yqg=w546-h969-no?authuser=0",
    },
  ]);

  return (
    <div className="App">
      {/* 헤더 */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="../dotorigram_logo.png"
          alt="logo"
        ></img>
      </div>
      <h1>인스타그램 클론 with React</h1>
      {/* 포스트 */}

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
