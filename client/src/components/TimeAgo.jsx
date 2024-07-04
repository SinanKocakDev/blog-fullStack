
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import trLocale from 'date-fns/locale/tr'; // Türkçe dil desteği

function TimeAgo({ createdAt }) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: trLocale // Dil seçeneği, örneğin Türkçe
  });

  return <span>{formattedDate}</span>;
}

export default TimeAgo;
