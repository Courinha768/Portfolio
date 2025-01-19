/**
 * @param {string} container_name
 */
function setShowMoreButton(container_name) {
    const showMoreButton = document.getElementById('show-more-button-' + container_name);
    const hiddenElements = document.querySelectorAll('.' + container_name + '.hidden');
    let isShowingMore = false;

    showMoreButton.addEventListener('click', () => {
        if (isShowingMore) {
            hiddenElements.forEach(skill => {
                skill.classList.add('hidden');
            });
            showMoreButton.textContent  = 'Show More';
            isShowingMore = false;
        }   else    {
            hiddenElements.forEach(skill => {
                skill.classList.remove('hidden');
            });
            showMoreButton.textContent  = 'Show Less';
            isShowingMore = true;
        }
        console.log(showMoreButton.textContent);
    });
}