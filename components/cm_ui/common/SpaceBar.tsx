
type Props = {
    className?:string
}
function SpaceBar({className}:Props) {
  return (
    <div className={`py-[24px] ${className ? className : ''}`}></div>
  )
}

export default SpaceBar