import styles from "./ProfileItem.module.css";

const ProfileItem = () => {
  return (
    <div className={styles.profile__container}>
      <p className={styles.profile__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        consectetur itaque autem aperiam, perspiciatis omnis minus sed libero
        sapiente sit facere labore tenetur magni assumenda, velit possimus
        dignissimos repellendus quos.
      </p>
      <div className={styles.profile__img}>
        <img src="" alt="" width="100px" height="100px" />
      </div>
    </div>
  );
};

export default ProfileItem;
