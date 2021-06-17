import "./MiniCard.css";

function MiniCard(props) {
   const classes = 'minicard ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default MiniCard;