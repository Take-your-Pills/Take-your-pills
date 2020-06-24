

const PrescriptionCard = (props) => {

    return (
        <div>
            {props.daysLeft}
            {props.successRate}
        </div>
    )
};

export default PrescriptionCard;