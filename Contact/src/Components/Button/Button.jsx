import Styles from './Button.module.css'

function Button({isOutline, icon, text, ...rest}) {
    return (
        <button {...rest} className={isOutline ? Styles.secondBtn  : Styles.primaryBtn}>
            {icon}
            {text}
        </button>
    )
}

export default Button