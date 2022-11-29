import { UserInfo } from 'components/UserInfo';
import { UserStat} from 'components/UserStat';
import { UserTitle } from 'components/UserTitle';
import { LocalGithubUser } from 'types';
import styles from './UserCart.module.scss';

interface UserCartProps extends LocalGithubUser{ }



export const UserCart = (props : UserCartProps) => {
  
  return(
    <div className={styles.userCart} >
      <img src = {props.avatar} alt = {props.login} className = {styles.avatar}/>
      <UserTitle created = {props.created} name = {props.name} login = {props.login}/>
      <p className={`${styles.bio}${!props.bio&&styles.empty}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat 
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo 
        blog = {props.blog}
        company = {props.location}
        twitter = {props.twitter}
        location = {props.location}
      />
    </div>
  )
};
