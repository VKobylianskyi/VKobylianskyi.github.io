import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import './styles/style.scss';

$('.row-wrapper').click(onRowClick);


function onRowClick() {
    $(this)
    .find($('.row-wrapper__body'))
    .slideToggle('fast')
    $(this)
        .find($('.app-toggle-button'))
        .toggleClass('app--rotated');
}