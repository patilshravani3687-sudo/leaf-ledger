// Leaf Ledger - Plant Care Tracker (v1)

const STORAGE_KEY = 'leaf_ledger_plants';

function getStoredPlants() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Failed to load plants from localStorage:', error);
    return [];
  }
}

function savePlants(plants) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
  } catch (error) {
    console.error('Failed to save plants to localStorage:', error);
  }
}

function calculateNextDate(startDateStr, intervalDays) {
  const date = new Date(startDateStr);
  date.setDate(date.getDate() + parseInt(intervalDays, 10));
  return date.toISOString().split('T')[0];
}

function formatDate(dateStr) {
  if (!dateStr) return 'Not set';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, monthIndex, day);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  return dateStr;
}

function getTodayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getWateringStatus(nextDateStr) {
  const today = getTodayString();
  if (!nextDateStr) {
    return { label: 'Healthy', className: 'status-healthy' };
  }
  if (nextDateStr < today) {
    return { label: 'Overdue', className: 'status-overdue' };
  } else if (nextDateStr === today) {
    return { label: 'Due today', className: 'status-due' };
  } else {
    return { label: 'Healthy', className: 'status-healthy' };
  }
}

let plants = getStoredPlants();
let searchQuery = '';
let currentSort = 'next-watering';

const plantForm = document.getElementById('plant-form');
const plantList = document.getElementById('plant-list');
const emptyState = document.getElementById('empty-state');
const noMatchState = document.getElementById('no-match-state');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');

function sortPlants(list, sortKey) {
  return [...list].sort((a, b) => {
    if (sortKey === 'name') {
      return (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' });
    }
    if (sortKey === 'recent') {
      const timeA = new Date(a.createdAt || 0).getTime();
      const timeB = new Date(b.createdAt || 0).getTime();
      return timeB - timeA;
    }
    // 'next-watering' default
    const dateA = a.nextWateringDate || '9999-99-99';
    const dateB = b.nextWateringDate || '9999-99-99';
    return dateA.localeCompare(dateB);
  });
}

function renderPlants() {
  while (plantList.firstChild) {
    plantList.removeChild(plantList.firstChild);
  }

  if (plants.length === 0) {
    emptyState.classList.remove('hidden');
    noMatchState.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  const query = searchQuery.trim().toLowerCase();
  const filtered = plants.filter(plant => {
    if (!query) return true;
    const nameMatch = plant.name && plant.name.toLowerCase().includes(query);
    const locMatch = plant.location && plant.location.toLowerCase().includes(query);
    return nameMatch || locMatch;
  });

  if (filtered.length === 0) {
    noMatchState.classList.remove('hidden');
    return;
  }

  noMatchState.classList.add('hidden');

  const visiblePlants = sortPlants(filtered, currentSort);

  visiblePlants.forEach(plant => {
    const card = document.createElement('article');
    card.className = 'plant-card';
    card.setAttribute('data-id', plant.id);

    const header = document.createElement('div');
    header.className = 'plant-card-header';

    const title = document.createElement('h3');
    title.className = 'plant-card-title';
    title.textContent = plant.name;
    header.appendChild(title);

    const status = getWateringStatus(plant.nextWateringDate);
    const chip = document.createElement('span');
    chip.className = `status-chip ${status.className}`;
    chip.textContent = status.label;
    header.appendChild(chip);

    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'plant-card-body';

    const locationRow = document.createElement('p');
    locationRow.className = 'plant-detail';
    const locLabel = document.createElement('span');
    locLabel.className = 'plant-detail-label';
    locLabel.textContent = 'Location:';
    const locVal = document.createElement('span');
    locVal.className = 'plant-detail-value';
    locVal.textContent = plant.location;
    locationRow.appendChild(locLabel);
    locationRow.appendChild(locVal);
    body.appendChild(locationRow);

    const scheduleRow = document.createElement('p');
    scheduleRow.className = 'plant-detail';
    const schedLabel = document.createElement('span');
    schedLabel.className = 'plant-detail-label';
    schedLabel.textContent = 'Schedule:';
    const schedVal = document.createElement('span');
    schedVal.className = 'plant-detail-value';
    schedVal.textContent = `Every ${plant.interval} days`;
    scheduleRow.appendChild(schedLabel);
    scheduleRow.appendChild(schedVal);
    body.appendChild(scheduleRow);

    const lastRow = document.createElement('p');
    lastRow.className = 'plant-detail';
    const lastLabel = document.createElement('span');
    lastLabel.className = 'plant-detail-label';
    lastLabel.textContent = 'Last watered:';
    const lastVal = document.createElement('span');
    lastVal.className = 'plant-detail-value';
    lastVal.textContent = plant.lastWatered ? formatDate(plant.lastWatered) : 'Never';
    lastRow.appendChild(lastLabel);
    lastRow.appendChild(lastVal);
    body.appendChild(lastRow);

    const nextRow = document.createElement('p');
    nextRow.className = 'plant-detail';
    const nextLabel = document.createElement('span');
    nextLabel.className = 'plant-detail-label';
    nextLabel.textContent = 'Next watering:';
    const nextVal = document.createElement('span');
    nextVal.className = 'plant-detail-value';
    nextVal.textContent = formatDate(plant.nextWateringDate);
    nextRow.appendChild(nextLabel);
    nextRow.appendChild(nextVal);
    body.appendChild(nextRow);

    card.appendChild(body);

    const actions = document.createElement('div');
    actions.className = 'plant-card-actions';

    const waterBtn = document.createElement('button');
    waterBtn.className = 'btn btn-water';
    waterBtn.type = 'button';
    waterBtn.textContent = '💧 Mark as watered';
    waterBtn.addEventListener('click', () => {
      markAsWatered(plant.id);
    });
    actions.appendChild(waterBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deletePlant(plant.id);
    });
    actions.appendChild(deleteBtn);

    card.appendChild(actions);

    plantList.appendChild(card);
  });
}

function handleAddPlant(event) {
  event.preventDefault();

  const nameInput = document.getElementById('plant-name');
  const locationInput = document.getElementById('plant-location');
  const intervalInput = document.getElementById('plant-interval');

  const name = nameInput.value.trim();
  const location = locationInput.value.trim();
  const interval = parseInt(intervalInput.value, 10);

  if (!name || !location || isNaN(interval) || interval < 1) {
    return;
  }

  const today = getTodayString();
  const nextWateringDate = calculateNextDate(today, interval);

  const newPlant = {
    id: Date.now().toString(),
    name,
    location,
    interval,
    createdAt: new Date().toISOString(),
    lastWatered: null,
    nextWateringDate
  };

  plants.push(newPlant);
  savePlants(plants);
  renderPlants();

  plantForm.reset();
  nameInput.focus();
}

function markAsWatered(id) {
  const plant = plants.find(p => p.id === id);
  if (!plant) return;

  const today = getTodayString();
  plant.lastWatered = today;
  plant.nextWateringDate = calculateNextDate(today, plant.interval);

  savePlants(plants);
  renderPlants();
}

function deletePlant(id) {
  plants = plants.filter(plant => plant.id !== id);
  savePlants(plants);
  renderPlants();
}

plantForm.addEventListener('submit', handleAddPlant);

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    searchQuery = event.target.value;
    renderPlants();
  });
}

if (sortSelect) {
  sortSelect.addEventListener('change', (event) => {
    currentSort = event.target.value;
    renderPlants();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlants();
});
