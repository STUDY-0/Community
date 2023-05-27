import logo from '../../public/logo.png';
import styles from '../styles/Community.module.css';
import navStyles from '../styles/nav.module.css';
import Image from 'next/image';

function Community() {
  return (
    <div className={styles.App}>
      <nav className={navStyles.nav}>
        <div className={navStyles['nav-container']}>
          <a className={navStyles.logo} href="index.html">
            <Image className={navStyles['logo-img']} src={logo} alt="Logo" />
          </a>
          <ul className={navStyles['nav-list']}>
            <li className={navStyles.community}>
              <a href="community.html">Community</a>
            </li>
            <li className={navStyles.mypage}>
              <a href="myPage.html">My Page</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles['post-container']}>
        <div className={styles.post}>
          <h1 className={styles['post-title']}>React 스터디 하실 분 ~</h1>
          <p className={styles['post-writer']}>Hyewon Yang</p>
          <p className={styles['post-date']}>2023 / 03 / 31</p>
          <p className={styles['post-content']}>저랑 같이 react 공부해요 ㅎㅎ 저는 미림 마이스터고 출신이고 같이 공부해서 취뽀해염</p>
        </div>
        <div className={styles.post}>
          <h1 className={styles['post-title']}>ditto</h1>
          <p className={styles['post-writer']}>newjeans</p>
          <p className={styles['post-date']}>2323 / 13 / 01</p>
          <p className={styles['post-content']}>likeyouwantsomebody너를상상햇지항상닿아있던처음느낌그대로난</p>
        </div>
        <div className={styles.post}>
          <h1 className={styles['post-title']}>ditto</h1>
          <p className={styles['post-writer']}>newjeans</p>
          <p className={styles['post-date']}>2323 / 13 / 01</p>
          <p className={styles['post-content']}>likeyouwantsomebody너를상상햇지항상닿아있던처음느낌그대로난</p>
        </div>
        <div className={styles.post}>
          <h1 className={styles['post-title']}>ditto</h1>
          <p className={styles['post-writer']}>newjeans</p>
          <p className={styles['post-date']}>2323 / 13 / 01</p>
          <p className={styles['post-content']}>likeyouwantsomebody너를상상햇지항상닿아있던처음느낌그대로난</p>
        </div>
      </div>
    </div>
  );
}

export default Community;
