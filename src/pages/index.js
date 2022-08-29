import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  
  const AuthUser = useAuthUser()
  
  return (
    <div className={styles.container}>
  
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Home)