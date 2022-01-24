import styles from './Post.module.css';
// import { Component } from 'react';

export function Post(props) {
  const onClick = () => {
    alert('Перейти в другой раздел?');
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.backgroundImageUrl})`,
        backgroundSize: '100%',
      }}
    >
      <div className={styles.post}>
        <div className={styles.post__item}>
          <button className={styles.post__button} onClick={onClick}>
            {props.category}
          </button>
          <div className={styles.post__window}>
            <img src={'/img/dialog.png'} alt='' />
            <p>{props.commentCount}</p>
          </div>
        </div>
        <div>
          <h2 className={styles.post__title}>{props.title}</h2>
        </div>
      </div>
    </div>
  );
}

// export class Post extends ({ Component }) {

//   onClick() {
//     alert('Перейти в другой раздел?');
//   }

//   render() {
//     const { title, backgroundImageUrl, category, commentCount } = this.props;
//     return (
//       <div style={{ background: `${backgroundImageUrl}` }}>
//         <div>
//           <div>
//             <button onclick={this.onClick}>{category}</button>
//             <div>
//               <img src={'/img/dialog.png'} alt='' />
//               <p>{commentCount}</p>
//             </div>
//             <h1>{title}</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
