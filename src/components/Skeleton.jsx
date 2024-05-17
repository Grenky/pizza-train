import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="115" cy="124" r="107" /> 
    <rect x="45" y="257" rx="0" ry="0" width="140" height="20" /> 
    <rect x="8" y="303" rx="0" ry="0" width="219" height="71" /> 
    <rect x="13" y="395" rx="0" ry="0" width="73" height="19" /> 
    <rect x="126" y="389" rx="0" ry="0" width="103" height="28" />
  </ContentLoader>
)

export default Skeleton;