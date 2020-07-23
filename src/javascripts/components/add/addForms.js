const equipAddForm = () => {
  const domString = `
  <form id="equipAddForm" class="px-4 py-3">
    <div class="form-group">
      <label for="addEquipName">Equipment Name</label>
      <input type="text" class="form-control" id="addEquipName">
    </div>
    <div class="form-group">
      <label for="addEquipType">Equipment Type</label>
      <input type="text" class="form-control" id="addEquipType">
    </div>
    <div class="form-group">
      <label for="addEquipImgUrl">Equipment Image URL</label>
      <input type="url" class="form-control" id="addEquipImgUrl">
    </div>
    <div class="form-group">
      <label for="addEquipLocation">Equipment Location</label>
      <input type="text" class="form-control" id="addEquipSize">
    </div>
    <button id="submitAdd" class="btn btn-primary">Submit</button>
  </form>`;
  return domString;
};

const staffAddForm = () => {
  const domString = `
  <form id="staffAddForm" class="px-4 py-3">
    <div class="form-group">
    <label for="addStaffName">Staff Name</label>
    <input type="text" class="form-control" id="addStaffName">
  </div>
  <div class="form-group">
    <label for="addStaffTitle">Staff Title</label>
    <input type="text" class="form-control" id="addStaffTitle">
  </div>
  <div class="form-group">
    <label for="addStaffImgUrl">Staff Image URL</label>
    <input type="url" class="form-control" id="addStaffImgUrl">
  </div>
    <button id="submitAdd" class="btn btn-primary">Submit</button>
  </form>`;
  return domString;
};

const vendorAddForm = () => {
  const domString = `
  <form id="vendorAddForm" class="px-4 py-3">
    <div class="form-group">
      <label for="addVendorName">Vendorsaur Name</label>
      <input type="text" class="form-control" id="addVendorName">
    </div>
    <div class="form-group">
      <label for="addVendorType">Vendorsaur Type</label>
      <input type="text" class="form-control" id="addVendorType">
    </div>
    <div class="form-group">
      <label for="addVendorImgUrl">Vendorsaur Image URL</label>
      <input type="url" class="form-control" id="addVendorImgUrl">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  return domString;
};

const junkTestForm = () => {
  const domString = '<h1>No Add Form for This Collection yet</h1>';
  return domString;
};

export default {
  junkTestForm,
  equipAddForm,
  staffAddForm,
  vendorAddForm,
};
