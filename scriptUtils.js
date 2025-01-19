
/**
 * @param {string} container_name
 */
function showMoreButton(container_name) {
    const show_more_button = document.getElementById('showMoreButton' + container_name);
    const hidden_elements = document.querySelectorAll('.' + container_name.toLowerCase() + '.hidden');

    show_more_button.addEventListener('click', () => {
        hidden_elements.forEach(skill => {

        })
    });
}