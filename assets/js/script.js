// hour color function
function hourColor() {
    // get current time
    let currentTime = moment().hours();

    // for each function to run for every hour block
    $('.time-block').each(function () {
        // make a variable holding the time of the block
        let time = $(this).attr('id');
        console.log(time);
        // if statement to set class attribute
        // if time is greater than current time, then set class attribute to future
        if (time > currentTime) {
            $(this).addClass('future');
        } else if (time === currentTime) {
            $(this).removeClass('future');
            $(this).addClass('present');
        } else {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }
    });
}

// get updates from local storage
function loadStorage() {
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}

// run these functions when event listener is fulfilled (onload)
function pageLoad() {
    //display date and time on the currentDay ID from starter code
    $('#currentDay').text(moment().format('dddd, MMMM Do'))
    // run hour color function
    hourColor();
    // load saved data from local storage
    loadStorage();
}

// save appointment function
function saveIt() {
    let timeSave = $(this).parent().attr('id');
    let appointmentSave = $(this).siblings('.description').val();

    localStorage.setItem(timeSave, appointmentSave);
}

// on click, save to local storage
$('.saveBtn').on('click', saveIt());
// on load event listener to run functions
$(window).on('load', pageLoad());