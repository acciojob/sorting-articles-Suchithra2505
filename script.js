//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function strip(word) {
const regex = /^(a |the |an )/i;
return word.replace(regex, '').trim();
}
    // Remove specified words from each band name and sort the bands
   // const sortedBands = bands.map(band => band.replace(/^(a |an the  )/i, '').trim()).sort();
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

    // Display sorted bands in the unordered list
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
      const listItem = document.createElement('li');
      listItem.textContent = band;
      bandList.appendChild(listItem);
    });