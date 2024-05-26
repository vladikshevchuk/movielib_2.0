'use client'
import styles from '@/components/auth/logIn/logIn.module.scss'
import Input from '@/components/input/input'

export default function LogIn() {
	return (
		<section className={styles.wrapper}>
			<div className={styles.position}>
				<h1>Sing In</h1>
				<h2>To continue for watching Web-side</h2>
				<form>
					<Input type='email' name='email' />
					<Input type='password' name='password' />
					<button>Sing In</button>
				</form>
				<p>Not registered yet?</p>
			</div>
		</section>
	)
}
