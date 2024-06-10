import React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import styles from './Search.module.css';

const images = [
  {
    url: 'https://media.gettyimages.com/id/1986319408/photo/los-angeles-california-ayra-starr-attends-the-66th-grammy-awards-at-crypto-com-arena-on.jpg?s=612x612&w=0&k=20&c=HRFOQEeXMpuZ6Q8SCI2ytoNfol-Pxu1HGoB0AMFzEhE=',
    title: 'AFRO',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1250818007/photo/tokyo-japan-hyein-haerin-hanni-minji-and-danielle-of-k-pop-group-newjeans-attend-the.jpg?s=612x612&w=0&k=20&c=KQw0xgbABzfzQ9ec-I5mg3ScU5d2yjVhpd27IU4Zl0E=',
    title: 'K-POP',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1340143161/photo/new-york-new-york-justin-bieber-and-hailey-bieber-attend-the-2021-met-gala-celebrating-in.jpg?s=612x612&w=0&k=20&c=8lHVCJizYsYdYHN004TPIIX2rNb0-wA7JV_sZy3tkSg=',
    title: 'POP',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1156167469/photo/manchester-tennessee-juice-wrld-performs-on-which-stage-during-the-2019-bonnaroo-arts-and.jpg?s=612x612&w=0&k=20&c=P1EieA_pSeqQIM6EU-4flcnav8KwUM7rVyhTN8Xfizw=',
    title: 'RAP',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1157281587/photo/beverly-hills-california-cardi-b-attends-2019-ascap-rhythm-soul-music-awards-at-the-beverly.jpg?s=612x612&w=0&k=20&c=8Twpf-i02rR1sud5t83zSeBExvm-xcuXiWdjCU1FBI8=',
    title: 'HIP-HOP',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1484027502/photo/indio-california-becky-g-performs-on-the-coachella-stage-during-the-2023-coachella-valley.jpg?s=612x612&w=0&k=20&c=BChvzimQmV14kP3T3LZjia5Rr2izzNpQJSBQ3xPme0w=',
    title: 'LATIN',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1195150390/photo/new-york-new-york-chris-tomlin-performs-onstage-during-his-2019-christmas-tour-at-the-beacon.jpg?s=612x612&w=0&k=20&c=EqDCvTe7ijXd3NO-ujgweIs916SKCT-0j7LQ3BSJA7w=',
    title: 'CHRISTIAN',
    width: '20%',
  },
  {
    url: 'https://media.gettyimages.com/id/1097539134/photo/kingston-jamaica-bob-marley-relaxes-with-friends-in-front-of-his-house-at-56-hope-road-on.jpg?s=612x612&w=0&k=20&c=DB1ld-i00Do3acIxcpV5utrLoxx08h1iMGe2uzT6wW0=',
    title: 'REGGAE',
    width: '20%',
  },{
    url: 'https://media.gettyimages.com/id/85077594/photo/lebanese-singer-najwa-karam-poses-for-a-picture-with-ex-belly-dancer-nariman-abbud-and.jpg?s=612x612&w=0&k=20&c=0RhQ2_xrieYKD8slmh0EKURZ_LIXwt6jQP-Dwk03NEQ=',
    title: 'ARABIC',
    width: '20%',
  },{
    url: 'https://media.gettyimages.com/id/543266852/photo/los-angeles-ca-diamond-platnumz-attends-the-2016-bet-awards-at-microsoft-theater-on-june-26.jpg?s=612x612&w=0&k=20&c=8Aufaqr0Nmz-obx1Z-eXWqgNr1uePZVJS5m4dt-J1pA=',
    title: 'BONGO',
    width: '20%',
  },
];

 function TopBar() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={styles.imageButton}
          style={{ width: image.width }}
        >
          <span
            className={styles.imageSrc}
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <span className={styles.imageBackdrop} />
          <span className={styles.image}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={styles.typography}
            >
              {image.title}
              <span className={styles.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </Box>
  );
}

export default TopBar;