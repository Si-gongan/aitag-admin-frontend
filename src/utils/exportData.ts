import { WorksType } from '@/services/post/schema';

export default function exportData(exportFormat: string, selectedWorks: WorksType[]) {
  const downloadData = [];
  const headers = Object.keys(selectedWorks[0]).join(',');
  downloadData.push(headers);

  selectedWorks.forEach((work) => {
    const values = Object.values(work).join(',');
    downloadData.push(values);
  });

  const downloadContent = downloadData.join('\n');
  const blob = new Blob([downloadContent], { type: `text/${exportFormat};charset=utf-8;` });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `ATAG ai 대체텍스트 의뢰 내용.${exportFormat}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
