import "./MiniCard.css";

function MiniCard(props) {                                //card for form and title
   const classes = 'minicard ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default MiniCard;