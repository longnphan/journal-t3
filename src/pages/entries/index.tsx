import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { api } from "../../utils/api";
import { JournalEditor } from "../../components/JournalEditor";

const EntriesPage: NextPage = () => {
  const { data: sessionData } = useSession();

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  return (
    <div className="mx-auto w-3/5">
      {sessionData && (
        <JournalEditor
          onSave={({ title, content }) => {
            void createNote.mutate({
              title,
              content,
            });
          }}
        />
      )}
    </div>
  );
};

export default EntriesPage;
