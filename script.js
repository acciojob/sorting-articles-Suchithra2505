//your JS code here. If required.
const bandss = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Remove specified words from each band name and sort the bands
    const sortedBands = bandss.map(band => band.replace(/^(a |an |the )/i, '').trim()).sort();

    // Display sorted bands in the unordered list
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
      const listItem = document.createElement('li');
      listItem.textContent = band;
      bandList.appendChild(listItem);
    });