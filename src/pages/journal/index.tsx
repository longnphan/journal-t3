import { api } from "../../utils/api";
import { JournalCard } from "../../components/JournalCard";
import { Header } from "../../components/Header";

export default function Journal() {
  const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery({});

  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  return (
    <>
    <Header />
    <div className="mx-auto w-96 md:w-3/5">
      <div>
        {notes?.map((note) => (
          <div key={note.id} className="mt-5">
            <JournalCard
              note={note}
              onDelete={() => void deleteNote.mutate({ id: note.id })}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
