const courseName = document.querySelector('#course-name');
const courseRating = document.querySelector('#course-rating');
const courseList = document.querySelector('#course-list');
const addBtn = document.querySelector('#add-btn');
const alertCtrl  = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click', () => {
    const enteredCourseName = courseName.value;
    const enteredCourseRating = courseRating.value;

    if(
        enteredCourseName.trim().length <= 0 || 
        enteredCourseRating.trim().length <= 0 || 
        enteredCourseRating < 0 || 
        enteredCourseRating > 5
        ) {
            alertCtrl.create({
                message: 'Please Enter A Valid Name Or Rating',
                header: 'Invalid Input!',
                buttons: ['Ok']
            }).then(alertModal => {
                alertModal.present();
            });

            return;
    }

    courseListItem = document.createElement('ion-item');
    courseListItem.textContent = courseName.value + ' - ' + courseRating.value + '/5';

    courseList.appendChild(courseListItem);

    courseRating.value = '';
    courseName.value = '';


});