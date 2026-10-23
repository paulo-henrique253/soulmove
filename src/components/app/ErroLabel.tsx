
type ErroLabelProps = {
    message: string
}

function ErroLabel({ message } : ErroLabelProps){
    return (
        <p className="text-amber-700 text-sm">{message}</p>
    )
}

export default ErroLabel;