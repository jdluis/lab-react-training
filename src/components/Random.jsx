function Random (props) {
  const handleRandom = () => {
    return Math.floor(Math.random() * (props.max - props.min) + props.min);
    }

    return (
        <>
            {handleRandom()}
        </>
    )
}

export default Random;