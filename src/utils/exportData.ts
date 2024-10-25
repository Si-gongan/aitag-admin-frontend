import { WorksType } from '@/services/post/schema';

export default function exportData(selectedWorks: WorksType[]) {
  const formats = ['csv', 'json', 'txt'];

  formats.forEach((format) => {
    let downloadContent: string;

    if (format === 'csv') {
      const downloadData = [];
      const headers = Object.keys(selectedWorks[0]).join(',');
      downloadData.push(headers);

      selectedWorks.forEach((work) => {
        const values = Object.values(work).join(',');
        downloadData.push(values);
      });

      downloadContent = downloadData.join('\n');
    } else if (format === 'json') {
      downloadContent = JSON.stringify(selectedWorks, null, 2);
    } else {
      // txt format
      downloadContent = selectedWorks
        .map((work) =>
          Object.entries(work)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n')
        )
        .join('\n\n');
    }

    const blob = new Blob([downloadContent], { type: `text/${format};charset=utf-8;` });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ATAG ai 대체텍스트 의뢰 내용.${format}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}
