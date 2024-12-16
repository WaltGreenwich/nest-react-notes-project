import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  getAllNotes() {
    return this.prisma.note.findMany();
  }

  getArchivedNotes() {
    return this.prisma.note.findMany({ where: { isArchived: true } });
  }

  createNote(noteData: { title: string; content: string }) {
    return this.prisma.note.create({
      data: {
        title: noteData.title,
        content: noteData.content,
      },
    });
  }

  updateNote(id: number, noteData: { title?: string; content?: string }) {
    return this.prisma.note.update({
      where: { id },
      data: noteData,
    });
  }

  async archiveNote(id: number) {
    const note = await this.prisma.note.findUnique({
      where: { id },
    });

    if (note) {
      return this.prisma.note.update({
        where: { id },
        data: {
          isArchived: !note.isArchived,
        },
      });
    }
    throw new Error('Note not found');
  }

  deleteNote(id: number) {
    return this.prisma.note.delete({
      where: { id },
    });
  }
}
