
function Rating(props) {
    console.log(props.children)
  return (
    <>
    {props.children.map(each => {
        return (
            <div>
            {each === 0 ? '★' : 0}

            </div>
        )
    })}
        ☆
        ★
    </>
  )
}

export default Rating