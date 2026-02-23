export default function Create() {
  return (
    <>
      <h2>Create Event</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
