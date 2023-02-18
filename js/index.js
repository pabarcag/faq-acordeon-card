import { showText } from "./showText.js";
import { hideText } from "./showText.js";

const $d = document;
const texts = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
]

$d.addEventListener('DOMContentLoaded',(e)=>{
    showText('#arrow1', '#paragraph1', texts[0], '#bold1');
    showText('#arrow2', '#paragraph2', texts[1], '#bold2');
    showText('#arrow3', '#paragraph3', texts[2], '#bold3');
    showText('#arrow4', '#paragraph4', texts[3], '#bold4');
    showText('#arrow5', '#paragraph5', texts[4], '#bold5');

    hideText('.card__arrow-active', '#paragraph1')
    hideText('.card__arrow-active', '#paragraph2')
    hideText('.card__arrow-active', '#paragraph3')
    hideText('.card__arrow-active', '#paragraph4')
    hideText('.card__arrow-active', '#paragraph5')

})



