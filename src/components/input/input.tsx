import styles from './input.module.scss'

export interface IInput extends HTMLInputElement {}

export default function Input({ type, name }: IInput): JSX.Element {
	return (
		<>
			<label className={styles.label} htmlFor={name}>
				Email:
			</label>
			<input className={styles.input} type={type} name={name} id={name} />
		</>
	)
}
