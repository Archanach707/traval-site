import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll'; 
import $ from 'jQuery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%"); 
new RevealOnScroll($(".ac-testimonials"), "60%"); 
var stickyHeader = new StickyHeader();