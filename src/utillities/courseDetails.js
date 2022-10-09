const courseDetails = async (id) => {
    const coursesData = await fetch('https://mocki.io/v1/d91e1cc3-b018-4f43-b6d0-82e7dc99c902');
    const courses = await coursesData.json();
    const courseDetails = courses.find(course => course.id === id);
    return courseDetails;
}

export { courseDetails };