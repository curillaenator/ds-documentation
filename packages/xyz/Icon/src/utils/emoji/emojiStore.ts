import briefcase from '../../assets/emojis/briefcase.png';
import directHit from '../../assets/emojis/direct-hit.png';
import explodingHead from '../../assets/emojis/exploding-head.png';
import faceWithRaisedEyebrow from '../../assets/emojis/face-with-raised-eyebrow.png';
import grinningFace from '../../assets/emojis/grinning-face.png';
import neutralFace from '../../assets/emojis/neutral-face.png';
import okHand from '../../assets/emojis/ok-hand.png';
import partyingFace from '../../assets/emojis/partying-face.png';
import pensiveFace from '../../assets/emojis/pensive-face.png';
import poutingFace from '../../assets/emojis/pouting-face.png';
import robot from '../../assets/emojis/robot.png';
import sleepingFace from '../../assets/emojis/sleeping-face.png';
import smilingFace from '../../assets/emojis/smiling-face.png';
import thumbsUp from '../../assets/emojis/thumbs-up.png';
import yawningFace from '../../assets/emojis/yawning-face.png';

export const emojiHex: Record<keyof typeof emojiStore, number> = {
  briefcase: 0x1f4bc,
  'direct-hit': 0x1f3af,
  'exploding-head': 0x1f92f,
  'face-with-raised-eyebrow': 0x1f928,
  'grinning-face': 0x1f600,
  'neutral-face': 0x1f610,
  'ok-hand': 0x1f44c,
  'partying-face': 0x1f973,
  'pensive-face': 0x1f614,
  'pouting-face': 0x1f621,
  robot: 0x1f916,
  'sleeping-face': 0x1f634,
  'smiling-face': 0x1f60a,
  'thumbs-up': 0x1f44d,
  'yawning-face': 0x1f971,
};

export const emojiStore = {
  briefcase,
  'direct-hit': directHit,
  'exploding-head': explodingHead,
  'face-with-raised-eyebrow': faceWithRaisedEyebrow,
  'grinning-face': grinningFace,
  'neutral-face': neutralFace,
  'ok-hand': okHand,
  'partying-face': partyingFace,
  'pensive-face': pensiveFace,
  'pouting-face': poutingFace,
  robot,
  'sleeping-face': sleepingFace,
  'smiling-face': smilingFace,
  'thumbs-up': thumbsUp,
  'yawning-face': yawningFace,
};
